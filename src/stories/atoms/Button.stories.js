import Button from "component/common/atoms/Button";

export default {
  title: "Atoms/Button",
  component: Button
};

const Template = (args) => {
  return <Button {...args} />;
};

export const ButtonType = Template.bind({});
ButtonType.args = {
  type: "primary",
  text: "primary"
};
