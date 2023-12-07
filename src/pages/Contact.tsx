import { CardWrapper, PageHeader, Paragraph } from "components";
import { PageProp } from "interfaces";

const ContactPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      <PageHeader>Contacts</PageHeader>
      <br />
      <Paragraph>Place holder</Paragraph>
      <br />
      <form className="flex flex-col gap-2">
        <label>Email</label>
        <input
          className="bg-gray-800 rounded-md p-2 w-1/2 focus:shadow-3xl"
          placeholder="example@mail.com"
        />
        <label>Name</label>
        <input
          className="bg-gray-800 rounded-md p-2 w-1/2 focus:shadow-3xl"
          placeholder="John Doe"
        />

        <label>Subject</label>
        <input
          className="bg-gray-800 rounded-md p-2 w-1/2 focus:shadow-3xl"
          placeholder="Subject"
        />

        <label>Phone</label>
        <input
          className="bg-gray-800 rounded-md p-2 w-1/2 focus:shadow-3xl"
          placeholder="000-000-0000"
        />

        <label>Message</label>
        <textarea
          className="h-32 w-3/4 bg-gray-800 rounded-md p-2 text-sm leading-thight focus:shadow-3xl"
          placeholder="Message"
        />
      </form>
    </CardWrapper>
  );
};
export default ContactPage;
