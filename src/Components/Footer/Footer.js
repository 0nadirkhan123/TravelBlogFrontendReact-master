import './Footer.css';
import bg from '../../Assets/bg-footer.jpg';
function Footer()
{
  return <div>
    <div className="FooterContainer">
        <img src={bg} width="100%" height="100%" />
        <div className="FooterNavContainer">
            <div className="FooterSubContainerOne">
               <h2>PLANNING FOR AN ADVENTUROUS TRIP??</h2>
               <h4>Get inspired, get motivated, feel the adrenaline,dwell into the obsession and pack your bags to make a move to ur favourite destination.
                 Here we find attractions that have never been found before, local natures bounties and unimaginable treasures of our mother EARTH.
                  Investigate and share your personal experiences in your very own blog post coloumns and tell ur story for the world to see.</h4>
            </div>
            <div className="FooterSubContainerOne">
               <h4>Featured Stories</h4>
               <h4>Story One</h4>
               <h4>Story Two</h4>
               <h4>Story Three</h4>
               <h4>Story Four</h4>
            </div>
            <div className="FooterSubContainerOne">
               <h4>Featured Stories</h4>
               <h4>Story One</h4>
               <h4>Story Two</h4>
               <h4>Story Three</h4>
               <h4>Story Four</h4>
            </div>
        </div>
    </div>
  </div>
}

export default Footer;