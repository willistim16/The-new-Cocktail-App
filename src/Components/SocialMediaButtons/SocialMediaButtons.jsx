import { FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa'; // Import icons

function SocialMediaButtons({ cocktailName, cocktailLink }) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=Check out this cocktail: ${cocktailName}!&url=${cocktailLink}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${cocktailLink}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this cocktail: ${cocktailName}! ${cocktailLink}`;

    return (
        <div style={styles.container}>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
                <FaTwitter title="Share on Twitter" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
                <FaFacebook title="Share on Facebook" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
                <FaWhatsapp title="Share on WhatsApp" />
            </a>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
    },
    icon: {
        fontSize: '20px', // Adjust icon size
        // color: 'orangered',
        textDecoration: 'none',
        transition: 'transform 0.3s',
    },
    iconHover: {
        transform: 'scale(1.2)', // Icon animation on hover
    },
};

export default SocialMediaButtons;