import Section1 from "./_components/section-1";
import Section2 from "./_components/section-2";
import Section3 from "./_components/section-3";
import Section1Wrapper from "./_components/section-1-wrapper";

export default function page() {
  return (
    <div>
      <Section1Wrapper>
        <Section1 />
        <Section2 />
        <Section3 />
      </Section1Wrapper>
    </div>
  );
}
