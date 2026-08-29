export default function Heading({ children, type = "h1" }) {
  const styles = {
    h1: "text-3xl font-bold text-text-primary",
    h2: "text-2xl font-semibold text-text-primary",
    h3: "text-xl font-medium text-text-primary",
  };
  return <h1 className={styles[type]}>{children}</h1>;
}
