import { useEffect } from 'react';

export default function useIFrameFocus({ id }: { id: string }, onFocus: () => any, onBlur: () => any) {
  let iframeClickedLast: boolean;

  function windowBlurred(e: Event) {
    const el = document.activeElement as HTMLElement;
    if (el?.getAttribute('id') === id) {
      iframeClickedLast = true;
      onFocus();
    }
  }

  function windowFocussed(e: Event) {
    if (iframeClickedLast) {
      iframeClickedLast = false;
      onBlur();
    }
  }

  useEffect(() => {
    window.addEventListener('focus', windowFocussed, true);
    window.addEventListener('blur', windowBlurred, true);

    return () => {
      window.removeEventListener('focus', windowFocussed, true);
      window.removeEventListener('blur', windowBlurred, true);
    };
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  // If you want to expose destroy function
  // function destroy() {
  //   window.removeEventListener('focus', windowFocussed, true);
  //   window.removeEventListener('blur', windowBlurred, true);
  // }

  // return { destroy };
}