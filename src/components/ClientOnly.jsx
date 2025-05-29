import { useEffect, useState } from 'react';

// This component is used to wrap components that should only render on the client side
// This helps prevent hydration errors with components that use browser APIs or Redux
export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div {...delegated}>
      {children}
    </div>
  );
}
