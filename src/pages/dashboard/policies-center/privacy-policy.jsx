import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

const policyContent = [
  {
    type: "text",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non id elit phasellus consectetur nisi amet faucibus eu convallis. Odio cras arcu feugiat metus eu volutpat. Condimentum sapien nec nunc sit enim elit viverra enim aenean. Amet mi lobortis gravida. Sed vitae quis malesuada odio vitae odio. Lacinia blandit sollicitudin sed ac risus nullam rhoncus. Eu commodo cras.",
    textcss: "!text-primary !font-medium",
  },
  {
    type: "text",
    content:
      "Lorem ipsum dolor sit amet consectetur. A facilisi volutpat dolor libero. Massa sit sed cras tristique eget pulvinar. Nisl velit porttitor adipiscing hendrerit massa velit quisque duis pharetra. Vulputate aliquet dignissim nullam tortor nibh ornare convallis senectus nulla. Ac sed ultricies sit sed senectus dignissim ut. Nibh leo facilisi vivamus laoreet et rhoncus lectus non eget. In urna ultricies et mi facilisi pharetra. Felis mi sem elementum massa enim neque. Egestas diam scelerisque laoreet volutpat in amet ornare non tincidunt. Donec arcu nulla sagittis faucibus lectus. Pharetra eu sit in nunc ac. Phasellus amet pulvinar vitae tristique. Aliquet lacus sit mauris eget at.",
  },
  {
    type: "text",
    content:
      "Vel sapien ac interdum ultrices cursus consequat libero dictum. Elit posuere sem enim purus imperdiet egestas blandit vivamus. Nunc congue tellus orci orci leo nisi in. Vitae pretium ante tortor tellus. Ipsum adipiscing ut ultrices auctor ultricies tristique. Lorem tristique scelerisque fusce adipiscing fermentum. Ut vulputate tempus sed hac arcu. Quis felis scelerisque risus adipiscing dictum maecenas. Neque eu vitae ac ultrices diam eget. A pellentesque nunc egestas tincidunt quisque amet condimentum aliquam. Convallis tellus dictum dui quam venenatis molestie. Nunc dignissim diam amet imperdiet habitant scelerisque. Urna velit elementum sed in quis porttitor nisi.",
  },
  {
    type: "text",
    content:
      "Facilisis egestas sagittis faucibus quis. Nisi dignissim lectus aenean tempor. Ipsum felis aenean ut laoreet eget viverra nam. Enim at auctor mauris orci lectus netus senectus tristique. Sed enim maecenas amet morbi potenti nibh nullam tellus etiam. Arcu tristique commodo consequat iaculis sed. Lectus mauris vulputate tellus leo. Eu faucibus sit sit lacus malesuada at ipsum magnis.",
  },
  {
    type: "heading",
    content: "Sit sed at lacus consectetur molestie imperdiet.",
  },
  {
    type: "text",
    content:
      "Viverra purus lobortis donec proin fermentum luctus sagittis dolor. Elementum in augue turpis placerat. Sit mattis sit neque tellus. Magna a iaculis cursus duis felis ut nibh non. Et urna bibendum in egestas nunc. Integer pretium eu quisque vitae ornare tristique. Interdum nunc est neque vitae nisl senectus. In et elementum elementum fermentum viverra non. Praesent morbi sit sit magna cursus. Velit ullamcorper convallis amet adipiscing aliquet gravida sit. Arcu pretium consectetur tristique pellentesque.",
  },
  {
    type: "text",
    content:
      "Donec integer mauris cursus pharetra. Elit ligula vulputate sollicitudin adipiscing nullam id tempus nunc sed. Dui sed morbi integer pellentesque netus. Purus augue lacinia sit suspendisse proin donec malesuada ut viverra. Elit vel vitae aliquam eget lacus leo leo lacus. Vel ac nulla nulla et consequat pellentesque libero. Aliquet felis cursus ut a lobortis sed tellus vel. Faucibus diam venenatis nisl turpis. Scelerisque suspendisse ultricies ultricies neque. Porta nullam eu et duis.",
  },
  {
    type: "text",
    content:
      "Aliquet neque varius suspendisse mauris eget. Hendrerit eu ut consequat morbi ipsum turpis. A sed id porttitor est urna. In a morbi egestas tempus. Ac quam mi amet commodo tellus molestie odio lacus. At sit in adipiscing varius turpis fermentum. Bibendum diam amet elit pretium dignissim commodo scelerisque id justo. Imperdiet vitae eu magna non. Volutpat faucibus mus donec non ultrices orci. Maecenas non non eu habitant turpis facilisis purus consectetur.",
  },
  {
    type: "text",
    content:
      "Massa elit faucibus semper amet. Fermentum eros erat bibendum vel pharetra. Gravida mi ultrices amet consectetur quis tortor in eget. In facilisi neque viverra non aliquet ultrices ultrices. Risus morbi ipsum mattis ac vitae eleifend ipsum nisi viverra. Magna fermentum nibh integer rutrum ut integer in ornare ac. Ullamcorper et fames risus pretium. Dignissim gravida egestas sit lobortis eu sociis nisl pellentesque. Augue tincidunt quis sit volutpat.",
  },
  {
    type: "text",
    content:
      "Et quam maecenas in nulla quis potenti. Odio nec a orci id felis augue. Egestas orci elementum arcu sem sed sit. Vulputate sapien imperdiet volutpat ut nisl arcu eu. Molestie lectus quam libero a pellentesque etiam. Volutpat tempus netus enim urna amet leo. Nullam in arcu vestibulum dui enim a ac vitae id. Pellentesque nunc eros tortor lacus amet velit pharetra dictum non. Pulvinar nam augue consectetur nisl velit diam consectetur pellentesque. In fermentum vitae cras orci placerat sed donec lorem. Vel mi pellentesque non risus pellentesque donec. Pellentesque vulputate et elit sollicitudin metus malesuada ut sit ante. Congue ligula gravida nulla commodo duis a nec vel adipiscing. Aliquam nec at odio ac cras tincidunt id mauris nunc. Malesuada natoque dictumst mauris amet lacus ultrices dictum.",
  },
  {
    type: "text",
    content:
      "Eget donec libero eu dolor. Massa nulla neque neque ut tellus quis dui. Interdum cum platea pretium consectetur at pellentesque quis massa. Turpis lorem porttitor aliquet magnis fringilla. Volutpat imperdiet egestas suspendisse porttitor pharetra amet nam faucibus. Sit praesent in pretium quis. Enim euismod dui magna urna feugiat in. Quis sed vitae egestas venenatis. Integer proin vulputate commodo hendrerit molestie tristique elementum erat tempus. Diam eu donec a in vitae. Turpis mauris non leo nec aliquam. Tortor turpis consectetur",
  },
  {
    type: "text",
    content:
      "Eget donec libero eu dolor. Massa nulla neque neque ut tellus quis dui. Interdum cum platea pretium consectetur at pellentesque quis massa. Turpis lorem porttitor aliquet magnis fringilla. Volutpat imperdiet egestas suspendisse porttitor pharetra amet nam faucibus. Sit praesent in pretium quis. Enim euismod dui magna urna feugiat in. Quis sed vitae egestas venenatis. Integer proin vulputate commodo hendrerit molestie tristique elementum erat tempus. Diam eu donec a in vitae. Turpis mauris non leo nec aliquam. Tortor turpis consecteturEget donec libero eu dolor. Massa nulla neque neque ut tellus quis dui. Interdum cum platea pretium consectetur at pellentesque quis massa. Turpis lorem porttitor aliquet magnis fringilla. Volutpat imperdiet egestas suspendisse porttitor pharetra amet nam faucibus. Sit praesent in pretium quis. Enim euismod dui magna urna feugiat in. Quis sed vitae egestas venenatis. Integer proin vulputate commodo hendrerit molestie tristique elementum erat tempus. Diam eu donec a in vitae. Turpis mauris non leo nec aliquam. Tortor turpis consectetur",
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="py-[20px]">
      <div className="px-4">
        <div className="mb-3">
          <h1 className="text-[26px] leading-tight font-semibold flex items-center gap-x-2">
            <Link
              to="/dashboard/policies/"
              className="translate-x-2 transition-all ease-linear duration-300 hover:translate-x-0"
            >
              <ChevronLeft className="size-7" />
            </Link>
            <span>Privacy Policy</span>
          </h1>
        </div>
        <div className="bg-[#2E353A] rounded-xl md:p-[12px_40px_15px_20px] p-[15px]">
          {policyContent.map((item, index) => (
            <div key={index} className="mb-3">
              {item.type === "heading" ? (
                <h2
                  className={`lg:text-[26px] md:text-[23px] text-[20px] leading-tight font-semibold mt-5 mb-2 ${item.headingcss}`}
                >
                  {item.content}
                </h2>
              ) : (
                <p
                  className={`md:text-base text-sm leading-normal font-normal text-white mb-1 ${item.textcss}`}
                >
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
