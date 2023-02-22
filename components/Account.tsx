import Header from './Header';

function AccountScreen() {
  return (
    <div>
      <Header />
      <div className="container py-4 flex justify-between ">
        <div className="flex gap-3 items-center ">
          <a href="index.html" className="text-primary text-base">
            <i className="fas fa-home"></i>
          </a>
          <span className="text-sm text-gray-500 ">
            <i className="fas fa-chevron-right"></i>
          </span>
          <p className="text-gray-500 font-medium uppercase">My Account</p>
        </div>
      </div>
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16 ">
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex bg-gray-100 items-center gap-4 ">
            <div className="flex-shrink-0">
              <img
                src="/images/images/profile1.jpeg"
                className="rounded-full w-14 h14 p-1 border border-gray-200 object-cover "
              />
            </div>
            <div>
              <p className="text-gray-600">Hello..</p>
              <h4 className="text-gray-800 capitalize font-semibold">
                Satish Reddy
              </h4>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600 ">
            <div className="space-y-1 pl-8">
              <a
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                Manage Account
                <span className="absolute -left-8 top-0 text-base ">
                  <i className="far fa-address-card"></i>
                </span>
              </a>
              <a
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                Profile Information{' '}
              </a>
              <a
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                Manage Address{' '}
              </a>
              <a
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                Change password{' '}
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                My order History
                <span className="absolute -left-8 top-0 text-base ">
                  <i className="fas fa-gift"></i>
                </span>
              </a>
              <a
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                My returns{' '}
              </a>
              <a
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                my cancellations{' '}
              </a>
              <a
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                my review{' '}
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                Payment Method
                <span className="absolute -left-8 top-0 text-base ">
                  <i className="far fa-credit-card"></i>
                </span>
              </a>
              <a
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                Voucher
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                My wishlist
                <span className="absolute -left-8 top-0 text-base ">
                  <i className="far fa-heart"></i>
                </span>
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                Logout
                <span className="absolute -left-8 top-0 text-base ">
                  <i className="fas fa-sign-out-alt"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0 ">
          <div className="shadow rounded bg-gray-100 px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4 ">
              <h3 className="font-medium capitalize text-gray-800 text-lg">
                Personal Profile{' '}
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h3 className="text-gray-700 font-medium">Satish Reddy</h3>
              <p className="" text-gray-800>
                satish@gmail.com
              </p>
              <p className="" text-gray-800>
                8867671633
              </p>
            </div>
          </div>

          <div className="shadow rounded bg-gray-100 px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4 ">
              <h3 className="font-medium capitalize text-gray-800 text-lg">
                Shipping Address{' '}
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h3 className="text-gray-700 font-medium">Satish Reddy</h3>
              <p className="" text-gray-800>
                satish@gmail.com
              </p>
              <p className="" text-gray-800>
                8867671633
              </p>
            </div>
          </div>

          <div className="shadow rounded bg-gray-100 px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4 ">
              <h3 className="font-medium capitalize text-gray-800 text-lg">
                Builling Address{' '}
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h3 className="text-gray-700 font-medium">Satish Reddy</h3>
              <p className="" text-gray-800>
                satish@gmail.com
              </p>
              <p className="" text-gray-800>
                8867671633
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountScreen;
