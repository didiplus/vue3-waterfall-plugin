/*
 * @Author: Yaowen Liu
 * @Date: 2022-03-17 14:41:05
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-18 14:07:51
 */
export interface ViewCard {
  src: any
  id?: string
  name?: string
  star?: boolean
  backgroundColor?: string
  [attr: string]: any
}

interface Point {
  rowPerView: number
}

export type Breakpoints = Record<number, Point>

export interface WaterfallProps {
  breakpoints: Breakpoints
  width: number
  animationDuration: number
  animationDelay: number
  animationEffect: string
  hasAroundGutter: boolean
  gutter: number
  list: ViewCard[]
}

export interface ItemWidthProps {
  breakpoints: Breakpoints
  wrapperWidth: number
  gutter: number
  hasAroundGutter: boolean
  initWidth: number
}

export interface ItemWidthByBreakpointProps extends ItemWidthProps {
  size: number
}

export interface LazyOptions {
  error?: string
  loading?: string
  observerOptions?: IntersectionObserverInit
  log?: boolean
}

export interface ValueFormatterObject {
  src: string
  error?: string
  loading?: string
}