import Image from "next/image";

export default function Home() {

  return (
    <main>
    {/*------------------------------HEADER BLOCK----------------------------------*/}

    <header class="text-gray-400 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image src='/logo-title-crop.jpeg' width={200} height={200}/>

          <span class="ml-3 text-xl">A Kubernetes Monitoring Solution</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a class="mr-5 hover:text-white">First Link</a>
          <a class="mr-5 hover:text-white">Second Link</a>
          <a class="mr-5 hover:text-white">Third Link</a>
          <a class="mr-5 hover:text-white">Fourth Link</a> */}
        </nav>
        <a href='#team' class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-100 rounded text-base mt-4 md:mt-0">Team
        </a>
      </div>
    </header>










    {/*--------------------------------HERO BLOCK--------------------------------*/}


    <section class="text-gray-400 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Kubernetes monitoring
            <br class="hidden lg:inline-block"/> made simple.
          </h1>
          <p class="mb-8 leading-relaxed">Track the health of your cluster at various levels. Understand resource usage of each deployment object, detect and anticipate bottlenecks before they occur, and scan your cluster for security vulnerabilities.</p>
          <div class="flex justify-center">
            <a href='https://github.com/oslabs-beta/kube-est8' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started!</a>
            <a href='https://medium.com/' class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Read More</a>
          </div>
        </div>
        <div class="lg:flex-grow lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src="/screenshot1.jpeg"/>
        </div>
      </div>
    </section>







    {/*-----------------------------FEATURES BLOCK----------------------------------*/}
    <section class="text-gray-400 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-48 h-full bg-indigo-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Core features</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Kube Est8 offers a robust set of features for monitoring your clusters. Future updates will include AI bottleneck detection as well as full cluster security vulnerability scan with RBAC visualization.</p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/screenshot-auth.jpeg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Data Privacy</h2>
            <p class="text-base leading-relaxed mt-2">Sign in with Google OAuth to keep your cluster secure.</p>

          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/screenshot-nodegraph.jpeg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Flow Graph</h2>
            <p class="text-base leading-relaxed mt-2">Visualize your deployment object hierarchy as well as create and delete nodes.</p>

          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/screenshot-nodedata.jpeg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Node Metrics</h2>
            <p class="text-base leading-relaxed mt-2">Collect up-to-date health metric information at the node-level of your cluster.</p>

          </div>
        </div>
      </div>
    </section>







    {/* ---------------------------------MEET THE TEAM BLOCK------------------------------ */}
  <section class="text-gray-400 body-font" id='team'>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-white">MEET THE TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The determined engineers who brought our application to life.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://media.licdn.com/dms/image/C5603AQHJ2bCVAGCCLA/profile-displayphoto-shrink_800_800/0/1654382621047?e=1714608000&v=beta&t=5TwFJbnszrC6PkKcO-y-iWoJMbVrBJYZvlmF0n0mKYg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Patrick Post</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Patrick played a crucial role in both the front and back ends of our application. When he isn't coding, you can probably still find him on the computer playing games.</p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/patrickppost/' class="text-gray-700">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/ppost0' class="ml-2 text-gray-700">
                <Image src='/github.svg' width={24} height={24}/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://media.licdn.com/dms/image/D4E03AQHR-B8HBbeZ5g/profile-displayphoto-shrink_400_400/0/1706292981342?e=1714608000&v=beta&t=gh7XYmua3xw1kpYYPckqLDDMFEDn2mPqgkiifhiMvVo"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Erika Wester</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Erika played a crucial role in scraping essential Kubernetes metrics, implementing OAuth, and ensuring security within our application. When she's not coding, she's probably off hiking a mountain somewhere.  </p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/erika-wester/' class="text-gray-700">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/erikawester' class="ml-2 text-gray-700">
                <Image src='/github.svg' width={24} height={24}/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://media.licdn.com/dms/image/D4D03AQHl3BKFlBzqcQ/profile-displayphoto-shrink_800_800/0/1708485463785?e=1714608000&v=beta&t=QHHNvKNg1tbSoTBbX9jqHeu05CCVoG-JE4C_He61j8Y"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Brandon Hernandez</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Brandon played a crucial role in structuring backend data, grabbing metrics, and rendering those metrics to the frontend. When he's not coding, he enjoys getting coffee with his girlfriend. </p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/brandon-hernandez-valencia/' class="text-gray-700">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/brandonhv' class="ml-2 text-gray-700">
                <Image src='/github.svg' width={24} height={24}/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://media.licdn.com/dms/image/C5603AQFusB4XHNsDEw/profile-displayphoto-shrink_400_400/0/1655661933782?e=1714608000&v=beta&t=qdGp061Pglv92yu6sE2XMfb7PUyYymAWYZi6enI3dwA"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Ines Chavez</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Ines played a crucial role in creating the Flow Chart, enabling user-friendly access to users Nodes. When she's not coding she's working on creating better acccessiblity for users of all backgrounds.</p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/ines-chavez-vigueras-21a971242/' class="text-gray-700">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/Ineschvz' class="ml-2 text-gray-700">
                <Image src='/github.svg' width={24} height={24}/>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
















    </main>
  );
}
