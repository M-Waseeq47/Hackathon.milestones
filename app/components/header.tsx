export default function Header() {
  return (
    <div>
      <h1
        className="font-medium text-left pl-12 pt-12 ml-9 pb-4"
        style={{
          fontFamily: "Clash Display",
          fontSize: "48px",
          lineHeight: "67.2px",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Build ecom sites,Super fast
      </h1>
      <p
        className="text-[20px] font-normal leading-[30px] text-left pl-12 ml-9"
        style={{
          fontFamily: "Satoshi",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        This template was built to help you rapidly, and modularly, build out
        high quality e-commerce concepts using pre-built content blocks,
        components and styles.Customise and play around with the template to
        match your specific requirements, and most of all have fun with it!{" "}
      </p>
    </div>
  );
}
