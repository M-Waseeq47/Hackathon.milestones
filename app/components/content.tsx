export default function Content() {
  return (
    <section className="text-white body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-wrap  w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0"></div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/2 md:w-1/2 p-4 br-2">
            <div
              className="p-6"
              style={{
                backgroundColor: "#4E4D93",
                borderRight: "2px solid white",
              }}
            >
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Use the styles
              </h2>
              <p className="leading-relaxed text-base">
                Styles in Figma mean you don’t have to repetitively enter values
                for typography, colors and elevations minimising the risk of
                inconsistencies and streamlining the design process.
              </p>
              <br />
              <p>
                Within this template you can find color and type styles, and
                their definitions on the style guide page. To use them simply
                select them from the Figma style panel as shown below.
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div
              className=" p-6 "
              style={{
                backgroundColor: "#4E4D93",
                borderRight: "2px solid white",
              }}
            >
              <h2 className="text-lg white font-medium title-font mb-4">
                Use the components
              </h2>
              <p className="leading-relaxed text-base">
                There’s a bunch of pre-configured components for you to use in
                this free template. Simply go to the Style Guide page and under
                the components header you can see everything included.
              </p>
              <br />
              <p>
                Buttons, steppers, filter options and more for you to integrate
                into your screens and modify to your tastes and requirements.{" "}
              </p>
              <div className="flex">
                <button className="flex mx-auto text-black mt-5 bg-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="flex mx-auto text-black mt-5 bg-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="flex mx-auto text-black mt-5 bg-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="flex mx-auto text-black mt-5 bg-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div
              className=" p-6 "
              style={{
                backgroundColor: "#4E4D93",
                borderRight: "2px solid white",
              }}
            >
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Use of layout
              </h2>
              <p className="leading-relaxed text-base">
                As well as components and styles we’ve built a bunch of layouts
                in both mobile and desktop sizes.
              </p>

              <div>
                Play around with replacing and modifying the nested content
                blocks and to switch device, simply use the content block
                property ‘device’ to toggle between mobile and desktop.
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div
              className="p-6"
              style={{
                backgroundColor: "#4E4D93",
                borderRight: "2px solid white",
              }}
            >
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Use the content blocks
              </h2>
              <p className="leading-relaxed text-base">
                We’ve built out a multitude of content blocks for you to use in
                your landing pages. From hero sections, forms, CTAs to pricing
                sections. Everything you need to get started building polished,
                modern landing pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
