export type InputProps = {
    textarea: boolean,
    type: string,
    required: boolean,
    value: string,
    setValue: any,
    errorRequest: any,
    field: string
}

declare module 'react-typed' {
    import { Component } from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      startDelay?: number;
      backSpeed?: number;
      backDelay?: number;
      loop?: boolean;
      showCursor?: boolean;
      cursorChar?: string;
      attr?: string;
      contentType?: 'html' | 'null';
    }
  
    export default class Typed extends Component<TypedProps> {}
  }