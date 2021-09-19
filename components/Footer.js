const Link = (props) => (
  <a href='#' className='font-normal hover:underline text-sm text-gray-600'>
    {props.text}
  </a>
);

export const Footer = () => {
  return (
    <footer className='bg-gray-200 border-t-[0.5px] border-gray-400 p-10 pl-5  '>
      <div class=' max-w-[1024px] mx-auto divide-y-[1px] divide-solid divide-gray-600 sm:grid sm:grid-cols-4 sm:divide-none'>
        <div className='flex flex-col gap-y-4 my-5 sm:pt-5'>
          <h1 className='font-medium text-sm text-gray-700'>About</h1>
          <Link text='How anrbob works' />
          <Link text=' Newsroom' />
          <Link text='Investors' />
          <Link text='Careers' />
          <Link text="Founder's Letter" />
          <Link text='Investors' />
          <Link text='Careers' />
          <Link text="Founder's Letter" />
          <Link text='Investors' />
        </div>
        <div className='flex flex-col gap-y-4 pt-5 my-5'>
          <h1 className='font-medium text-sm text-gray-700'>Community</h1>
          <Link text='How anrbob works' />
          <Link text=' Newsroom' />
          <Link text='Investors' />
          <Link text='Careers' />
        </div>
        <div className='flex flex-col gap-y-4 pt-5  my-5'>
          <h1 className='font-medium text-sm text-gray-700'>Host</h1>
          <Link text='How anrbob works' />
          <Link text=' Newsroom' />
          <Link text='Investors' />
          <Link text='Careers' />
          <Link text="Founder's Letter" />
          <Link text='Investors' />
          <Link text='Careers' />
          <Link text="Founder's Letter" />
        </div>
        <div className='flex flex-col gap-y-4 pt-5  mt-5'>
          <h1 className='font-medium text-sm text-gray-700'>Support</h1>
          <Link text='How anrbob works' />
          <Link text=' Newsroom' />
          <Link text='Investors' />
          <Link text='Careers' />
          <Link text="Founder's Letter" />
          <Link text='Investors' />
        </div>
      </div>
      <div className='my-5 pt-5 border-t-2 border-solid border-gray-400'>
        <p className='text-sm font-medium'>
          {/* &copy; {new Date().getFullYear()} Rahman,Inc. */}
          This is a dummy website
        </p>
        <div className='mt-2 space-x-2 flex items-center'>
          <Link text='Privacy' />
          <div className='h-1 w-1 rounded-full bg-gray-700'></div>
          <Link text='Terms' />
          <div className='h-1 w-1 rounded-full bg-gray-700'></div>
          <Link text='Sitemap' />
          <div className='h-1 w-1 rounded-full bg-gray-700'></div>
          <Link text='Company details' />
        </div>
      </div>
      <div>
        <h1>
          Developed by{" "}
          <a
            className='cursor-pointer underline hover:text-red-400'
            target='_blank'
            href='https://marahman671.web.app/home-page'
          >
            M.A.Rahman
          </a>
        </h1>
      </div>
    </footer>
  );
};
