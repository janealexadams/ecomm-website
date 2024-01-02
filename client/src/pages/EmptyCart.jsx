export default function Empty() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 sm:py-32 lg:px-8">
          <div className="text-center py-72">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl pb-7">Your cart is empty.</h1>
            <a href="/" className="font-semibold leading-6 text-cyan-900 hover:text-cyan-700">
                Click here to continue shopping. 
              </a>
          </div>
        </main>
      </>
    );
  }
  