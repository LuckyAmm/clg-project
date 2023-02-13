import React from 'react'

export default function Table() {
    return (
      <div className="mt-20 w-screen">
        <div className="mx-8 flex gap-3 flex-col bg-white p-6">
          <h2 className=" text-center text-2xl underline text-red-600 font-bold mb-6">
            Steps To Join in this College
          </h2>
          <div className="text-center md:text-left">
            <span className="text-gray-900 font-semibold text-2xl mx-auto">
              Step-1
            </span>{" "}
            <p className="pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, qui. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt odio, neque fugit dolorum tenetur qui,
              aliquam illum rerum enim iure exercitationem. Tenetur assumenda,
              suscipit dolorem incidunt eius praesentium veritatis perspiciatis
              fuga ipsam quibusdam? Exercitationem accusamus fugit, tempora
              ratione eaque natus nostrum quod earum aspernatur veniam quam
              neque illum sapiente repellendus mollitia fuga itaque nihil!
              Delectus laboriosam vitae accusantium, accusamus quis voluptate
              facilis dicta velit repellendus nulla nobis, nostrum consectetur
              minus modi aperiam perferendis minima quas alias veniam? Unde,
              nesciunt error officia et at, sapiente laboriosam esse odio
              incidunt modi cumque dolorum omnis accusantium perspiciatis ab
              tempora iste, quod quam deleniti. Eveniet, accusantium excepturi
              voluptatum quidem dolorum tempora quia ea, obcaecati reiciendis
              eos ipsum ex at iusto cupiditate eaque adipisci dolor veniam qui
              officiis? Dolore asperiores laboriosam tempore iste vero quod,
              numquam quia veniam esse, aut veritatis dolores non nemo! Officia,
              architecto repudiandae harum laborum et in quae repellendus id
              quos tenetur, sed voluptates molestiae animi? Mollitia magni nihil
              ad ratione nostrum suscipit voluptatem natus reiciendis odio velit
              eveniet iste quam aliquid harum libero quia, enim eligendi
              repellat? Aliquid praesentium consequuntur distinctio architecto
              laboriosam sed blanditiis error totam tenetur vel maiores officia,
              molestias quidem laudantium porro saepe ut perspiciatis! Ex,
              dolore!
            </p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-gray-900 font-semibold text-2xl">Step-1</span>{" "}
            <p className="pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, qui.
            </p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-gray-900 font-semibold text-2xl">Step-1</span>{" "}
            <p className="pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, qui.
            </p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-gray-900 font-semibold text-2xl">Step-1</span>{" "}
            <p className="pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, qui.
            </p>
          </div>
        </div>
        <h2 className="dividerStyle mt-16 mb-3">Seat Details</h2>
        <div class="overflow-x-auto  mb-16 container mx-auto">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full border text-center">
                <thead class="border-b bg-gray-300 text-white">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Branch
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Total Seats
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Occupied Seats
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Available Seats
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      CME
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                      27
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                      10
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      17
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      ECE
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                      55
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                      22
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      33
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      MEC
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                      34
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      10
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      24
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="my-16 bg-white container mx-auto p-6">
          <h2 className="dividerStyle mb-5">Required Docs</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            explicabo officia numquam ad, et, maxime nihil quo ut vel expedita,
            iure maiores neque obcaecati dicta sed? Aut ipsa nobis delectus eos,
            rerum optio? Pariatur laudantium laborum, alias cum quis cupiditate
            debitis nisi provident minus eveniet! Dolores atque quaerat itaque
            repellendus?
          </div>
          <div className="my-8 text-center">
            <h4 className="font-bold text-xl ">
              For More Details Contact Adminsistration office
            </h4>
            <span>OR</span>{" "}
            <p>
              <span className="text-gray-900 font-semibold text-lg">
                Office Mobile Number :{" "}
              </span>
              <span className="text-gray-600">6547895216</span>
            </p>
          </div>
        </div>
      </div>
    );
}
