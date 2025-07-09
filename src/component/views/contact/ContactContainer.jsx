import PageContainer from "../../layout/PageContainer";
import PageTitle from "../../common/PageTitle";
import { Transportation } from "./ContactViewElement";
import CompanyLocation from "./contents/CompanyLocation";

const ContactContainer = ({ history }) => {
  return (
    <PageContainer className="contact">
      <PageTitle pageName="contact" />
      <Transportation history={history} />
      <CompanyLocation />
    </PageContainer>
  );
};

export default ContactContainer;
