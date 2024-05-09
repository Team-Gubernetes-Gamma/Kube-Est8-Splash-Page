import Image from "next/image";

export default function Home() {

  return (
    <main>
    {/*------------------------------HEADER BLOCK----------------------------------*/}

    <header class="text-gray-400 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='' class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image class='hover:brightness-125 hover:cursor-pointer' src='/logo-title-crop.jpeg' width={200} height={200}/>

          <span class="ml-3 text-xl">A Kubernetes Monitoring Solution</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a class="mr-5 hover:text-white">First Link</a>
          <a class="mr-5 hover:text-white">Second Link</a>
          <a class="mr-5 hover:text-white">Third Link</a>
          <a class="mr-5 hover:text-white">Fourth Link</a> */}
        </nav>
        <a href='#team' class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-100 rounded text-base mt-4 md:mt-0">About Us
        </a>
        <a href='https://www.linkedin.com/company/kubeest8' class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-100 rounded text-base mt-4 md:mt-0">Stay Updated
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
            <a href='https://medium.com/@ineschvz21/kubeest8-monitor-the-security-of-your-kubernetes-clusters-6ef01f3a7188' class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Read More</a>
          </div>
        </div>
        <div class="lg:flex-grow lg:w-full md:w-1/2 w-5/6">
          <img class="hover:brightness-110 object-cover object-center rounded" alt="hero" src="/screenshot1.jpeg"/>
        </div>
      </div>
    </section>







    {/*-----------------------------FEATURES BLOCK----------------------------------*/}
    <section class="text-gray-400 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-24 h-full "></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Core features</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Kube Est8 offers a robust set of features for monitoring your clusters. Future updates will include AI bottleneck detection as well as full cluster security vulnerability scan with RBAC visualization.</p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 hover:brightness-125 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/screenshot-auth.jpeg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Data Privacy</h2>
            <p class="text-base leading-relaxed mt-2">Sign in with Google OAuth to keep your cluster secure.</p>

          </div>
          <div class="p-4 hover:brightness-125 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/screenshot-nodegraph.jpeg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Flow Graph</h2>
            <p class="text-base leading-relaxed mt-2">Visualize your deployment object hierarchy as well as create and delete nodes.</p>

          </div>
          <div class="p-4 hover:brightness-125 md:w-1/3 sm:mb-0 mb-6">
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

  <div class="container px-5 py-16 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-24 h-full "></div>
          </div>
        </div>
      </div>

    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-white">Meet Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The determined engineers who brought our application to life</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="hover:brightness-110 flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="/patrick.png"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Patrick Post</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Patrick played a crucial role in both the front and back ends of our application, as well as spinning up our clusters for testing. When he isn't coding, you can probably still find him on the computer playing games.</p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/patrickppost/' class="hover:scale-110 hover:brightness-150 text-gray-700">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/ppost0' class="ml-2 hover:scale-110 hover:brightness-150 text-gray-700">
                <Image src='/github.svg' width={24} height={24}/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="hover:brightness-110 flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="/erika.png"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Erika Wester</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Erika's work in scraping essential Kubernetes metrics and implementing user authentication ensured security for data within our application. She enjoys hiking on mountains in her free time as well as playing the guitar.</p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/erika-wester/' class="text-gray-700 hover:scale-110 hover:brightness-150">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/erikawester' class="ml-2 text-gray-700 hover:scale-110 hover:brightness-150">
                <Image src='/github.svg' width={24} height={24}/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="hover:brightness-110 flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="/brandon.png"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Brandon Hernandez</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Brandon was responsible for handling backend data, grabbing metrics, and rendering those metrics to the frontend. He loves watching UFC and getting coffee with his girlfriend.</p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/brandon-hernandez-valencia/' class="text-gray-700 hover:scale-110 hover:brightness-150">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/brandonhv' class="ml-2 text-gray-700 hover:scale-110 hover:brightness-150">
                <Image src='/github.svg' width={24} height={24}/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="hover:brightness-110 flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="/ines.png"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Ines Chavez</h2>
            <h3 class="text-gray-500 mb-3">Software Engineer</h3>
            <p class="mb-4">Ines operated on vital aspects of our app such as the Flow Chart, enabling user-friendly access to nodes. In her spare time, she loves to craft unique crochet pieces and dedicate time to empowering people with disabilities, through inclusion and accessibility.</p>
            <span class="inline-flex">
              <a href='https://www.linkedin.com/in/ines-chavez-vigueras-21a971242/' class="text-gray-700 hover:scale-110 hover:brightness-150">
                <Image src='/linkedin.svg' width={24} height={24}/>
              </a>
              <a href='https://github.com/Ineschvz' class="ml-2 text-gray-700 hover:scale-110 hover:brightness-150">
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
