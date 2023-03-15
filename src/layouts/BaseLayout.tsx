export type BaseLayoutProps = {
  children: React.ReactNode;
};
const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  return <>{props.children}</>;
};

export default BaseLayout;
