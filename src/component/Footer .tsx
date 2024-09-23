const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-2">Column 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Suspendisse varius enim in eros elementum tristique.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Column 2</h4>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <p>Curabitur lacinia felis vel neque volutpat.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Column 3</h4>
            <p>Aenean vel elit at nisi varius lacinia.</p>
            <p>Pellentesque habitant morbi tristique senectus.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Column 4</h4>
            <p>Nam tincidunt nisi nec sapien faucibus, a ultrices.</p>
            <p>Integer vitae libero ac risus egestas placerat.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">© 2024 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
