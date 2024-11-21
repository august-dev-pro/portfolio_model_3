const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white text-center py-4">
      <div className="uppercase font-semibold">webpress</div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} WebPress. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
