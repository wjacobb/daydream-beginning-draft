function Footer() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 
                      py-14 bg-gray-100 text-gray-600">
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">ABOUT</h5>
              <p>How Airbnb works</p>
              <p>Newsroom</p>
              <p>Investors</p>
              <p>Airbnb Plus</p>
              <p>Airbnb Luxe</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">COMMUNITY</h5>
              <p>Accessibility</p>
              <p>This is not a real site</p>
              <p>Its a pretty awesome clone</p>
              <p>Referrals accepted</p>
              <p>Papafam</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">Shoutouts</h5>
              <p>Indys dope</p>
              <p>Scotts rad</p>
              <p>Davids also dope</p>
              <p>Jacobs also rad</p>
              <p>Addison and Collin are dope rad</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">SUPPORT</h5>
              <p>Help Center</p>
              <p>Trust and Safety</p>
              <p>Yo Wattup</p>
              <p>Lots of Articles</p>
              <p>Join us</p>
          </div>
      </div>
    );
}

export default Footer;