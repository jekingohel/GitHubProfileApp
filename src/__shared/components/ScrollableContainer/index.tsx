import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
} from 'react-native';

interface ScrollableContainerProps extends ScrollViewProps {
  backgroundColor?: string;
  horizontal?: boolean;
  scrollBar?: boolean;
  wrapperStyle?: object;
  refresh?: boolean;
  refreshing?: boolean;
  scrollLoader?: boolean;
  onRefresh?: () => void;
  handelScroll?: (event: object, isEndReached: boolean) => void;
  onScroll?: ScrollViewProps['onScroll'];
  scrollref?: React.RefObject<ScrollView>;
  scrollToTop?: boolean;
  scrollToTopPostion?: number;
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
    ...restProps
  } = props;

  const scrollRef = scrollref || useRef<ScrollView>(null);
  const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

  const handelOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;

    if (layoutMeasurement) {
      const isEndReached =
        layoutMeasurement.height + contentOffset.y + 2 >= contentSize.height;

      contentOffset.y > 100
        ? setScrollToTopBtn(true)
        : setScrollToTopBtn(false);
      handelScroll(event, isEndReached);
    }
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
    <Animated.ScrollView
      testID="scroll-view"
      ref={scrollRef}
      keyboardShouldPersistTaps="handled"
      horizontal={horizontal}
      showsHorizontalScrollIndicator={horizontal && scrollBar}
      showsVerticalScrollIndicator={!horizontal && scrollBar}
      style={[
        {
          flex: 1,
          backgroundColor: backgroundColor,
          paddingVertical: 15,
        },
        wrapperStyle && wrapperStyle,
      ]}
      refreshControl={
        refresh ? (
          <RefreshControl
            progressBackgroundColor={'#FFFFFF'}
            colors={['black']}
            tintColor={'black'}
            titleColor={'black'}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        ) : undefined
      }
      onScroll={onScroll ? onScroll : handelOnScroll}
      // contentContainerStyle={{flex: 1}}
      {...restProps}>
      {props.children}
    </Animated.ScrollView>
  );
};

export default ScrollableContainer;
