import * as React from 'react';
import { useEffect, useRef, useContext } from 'react';
import  ProductContext from '../context/ProductContext';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
import type { SliderProps } from 'rc-slider';
import raf from 'rc-util/lib/raf';
import Tooltip from 'rc-tooltip';

const HandleTooltip = (props: {
  value: number;
  children: React.ReactElement;
  visible: boolean;
  tipFormatter?: (value: number) => React.ReactNode;
  flag: boolean;
}) => {
  const { value, children, visible, tipFormatter = (val) => `${val} km`, flag, ...restProps } = props;
  const { distanceValue, setDistanceValue  } = useContext(ProductContext);
  if(props.flag) setDistanceValue(value.toString());

  const tooltipRef = useRef<any>();
  const rafRef = useRef<number | null>(null);

  function cancelKeepAlign() {
    raf.cancel(rafRef.current!);
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      // tooltipRef.current?.forcePopupAlign();
    });
  }

  useEffect(() => {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [value, visible]);

  return (
    <Tooltip
      placement="top"
      overlay={tipFormatter(value)}
      overlayInnerStyle={{ minHeight: 'auto' }}
      ref={tooltipRef}
      visible={visible}
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};

export const handleRender: SliderProps['handleRender'] = (node, props) => {
  return (
    <HandleTooltip value={props.value} visible={props.dragging} flag={true}>
      {node}
    </HandleTooltip>
  );
};

const TooltipSlider = ({
  tipFormatter,
  tipProps,
  ...props
}: SliderProps & { tipFormatter?: (value: number) => React.ReactNode; tipProps?: any }) => {
  const tipHandleRender: SliderProps['handleRender'] = (node, handleProps) => {
    return (
      <HandleTooltip
        value={handleProps.value}
        visible={handleProps.dragging}
        tipFormatter={tipFormatter}
        flag={false}
        {...tipProps}
      >
        {node}
      </HandleTooltip>
    );
  };

  return <Slider {...props} handleRender={tipHandleRender} />;
};

export default TooltipSlider;