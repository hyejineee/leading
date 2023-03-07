/* eslint-disable react/destructuring-assignment */
import React, { ErrorInfo, ReactNode, ReactPropTypes } from 'react';

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('errorBoundary - componentDidCatch()', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
