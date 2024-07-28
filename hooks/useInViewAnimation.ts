// hooks/useInViewAnimation.ts
import { useInView } from "react-intersection-observer";

interface UseInViewAnimationOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

const useInViewAnimation = (options: UseInViewAnimationOptions = {}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  const animation = inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 };

  return { ref, animation };
};

export default useInViewAnimation;
