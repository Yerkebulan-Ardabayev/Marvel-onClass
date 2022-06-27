import { Component } from 'react';

import ErrorMessage from '../errorMessage/ErrorMessage';

class ErrorBoundary extends Component {
  state = {
    error: false,
  }; //предохранитель для ошибок для метода рендер, в методах жизненного цикла, конструкторах дочерних компонентов. Не ловят ошибки произошедшие внутри обработчиков событии, асинхронный код, и в самом предохранителе.

  static getDerivedStateFromError(error) { 
    return {
      error: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true
    });
  }

  render() { 
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

