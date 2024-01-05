import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
} from 'react-native';

// Define the type of properties that ScrollableContainer component accepts
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

/**
 * JSX Component for a scrollable container with customizable features.
 * @param {object} props - Properties for configuring the ScrollableContainer.
 * @param {string} [props.backgroundColor] - Background color of the scrollable container.
 * @param {boolean} [props.horizontal] - Determines if the scroll should be horizontal.
 * @param {boolean} [props.scrollBar] - Determines if the scroll bar should be visible.
 * @param {object} [props.wrapperStyle] - Additional styles to be applied to the container.
 * @param {boolean} [props.refresh] - Enables pull-to-refresh functionality.
 * @param {boolean} [props.refreshing] - Indicates whether the pull-to-refresh is in progress.
 * @param {boolean} [props.scrollLoader] - Indicates whether to show a loader during scrolling.
 * @param {() => void} [props.onRefresh] - Callback function when pull-to-refresh is triggered.
 * @param {(event: object, isEndReached: boolean) => void} [props.handelScroll] - Callback for handling scroll events.
 * @param {ScrollViewProps['onScroll']} [props.onScroll] - Callback for handling scroll events.
 * @param {React.RefObject<ScrollView>} [props.scrollref] - Reference to the ScrollView component.
 * @param {boolean} [props.scrollToTop] - Indicates whether to scroll to the top.
 * @param {number} [props.scrollToTopPostion] - Position to scroll to when scrollToTop is true.
 * @returns {JSX.Element} - ScrollableContainer component.
 * @example
 * <ScrollableContainer
 *   backgroundColor="#F5F5F5"
 *   horizontal={false}
 *   scrollBar={true}
 *   refresh={true}
 *   refreshing={false}
 *   onRefresh={() => console.log('Refreshing...')}
 *   handelScroll={(event, isEndReached) => {
 *     console.log('Scrolling...', isEndReached);
 *   }}
 *   onScroll={(event) => console.log('Scrolling...', event)}
 *   scrollref={scrollRef}
 *   scrollToTop={true}
 *   scrollToTopPostion={0}
 * >
 *  /* Add your scrollable content here
 * </ScrollableContainer>
 */
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

  // Create a ref for the ScrollView component
  const scrollRef = scrollref || useRef<ScrollView>(null);

  // State to track whether to show the scroll to top button
  const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

  // Callback function to handle scroll events
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

  // Effect to scroll to the top when scrollToTop and scrollToTopPostion are provided
  useEffect(() => {
    if (scrollToTop && scrollToTopPostion && scrollRef.current) {
      scrollRef.current.scrollTo({
        y: scrollToTopPostion,
        animated: true,
      });
    }
  }, [scrollToTop, scrollToTopPostion]);

  // Render the ScrollableContainer component
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
