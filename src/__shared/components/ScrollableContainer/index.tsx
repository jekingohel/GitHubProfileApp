import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
} from 'react-native';

interface ScrollableContainerProps extends ScrollViewProps {
  backgroundColor?: string;
  horizontal?: boolean;
  scrollBar?: boolean;
  wrapperStyle?: any;
  refresh?: boolean;
  refreshing?: boolean;
  scrollLoader?: boolean;
  onRefresh?: () => void;
  handelScroll?: (event: any, isEndReached: boolean) => void;
  onScroll?: ScrollViewProps['onScroll'];
  scrollref?: React.RefObject<ScrollView>;
  scrollToTop?: boolean;
  scrollToTopPostion?: number;
  containerStyle?: any;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = props => {
  const {
    backgroundColor,
    horizontal,
    scrollBar,
    wrapperStyle,
    refresh = false,
    refreshing = false,
    scrollLoader = false,
    onRefresh = () => {},
    handelScroll = () => {},
    onScroll,
    scrollref,
    scrollToTop,
    scrollToTopPostion,
    containerStyle,
    ...restProps
  } = props;

  const scrollRef = scrollref || useRef<ScrollView>(null);
  const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

  const handelOnScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y + 2 >= contentSize.height;

    contentOffset.y > 100 ? setScrollToTopBtn(true) : setScrollToTopBtn(false);
    handelScroll(event, isEndReached);
  };

  useEffect(() => {
    if (scrollToTop && scrollToTopPostion && scrollRef.current) {
      scrollRef.current.scrollTo({
        y: scrollToTopPostion,
        animated: true,
      });
    }
  }, [scrollToTop, scrollToTopPostion]);

  return (
    <>
      <Animated.ScrollView
        ref={scrollRef}
        keyboardShouldPersistTaps="handled"
        horizontal={horizontal}
        showsHorizontalScrollIndicator={horizontal && scrollBar}
        showsVerticalScrollIndicator={!horizontal && scrollBar}
        style={[
          {
            backgroundColor: backgroundColor,
            paddingVertical: 15,
          },
          wrapperStyle && wrapperStyle,
        ]}
        onScroll={onScroll ? onScroll : handelOnScroll}
        {...restProps}>
        {props.children}
      </Animated.ScrollView>
      {refresh && (
        <RefreshControl
          progressBackgroundColor={'#FFFFFF'}
          colors={['black']}
          tintColor={'black'}
          titleColor={'black'}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </>
  );
};

export default ScrollableContainer;
