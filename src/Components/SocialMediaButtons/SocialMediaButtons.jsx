import { lazy, Suspense } from 'react';

const FaTwitter = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaTwitter })));
const FaFacebook = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaFacebook })));
const FaWhatsapp = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaWhatsapp })));

function SocialMediaButtons({ cocktailName, cocktailLink }) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=Check out this cocktail: ${cocktailName}!&url=${cocktailLink}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${cocktailLink}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this cocktail: ${cocktailName}! ${cocktailLink}`;

    return (
        <div style={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="icon">
                    <FaTwitter title="Share on Twitter" />
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="icon">
                    <FaFacebook title="Share on Facebook" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="icon">
                    <FaWhatsapp title="Share on WhatsApp" />
                </a>
            </Suspense>
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
        fontSize: '15px',
        textDecoration: 'none',
        transition: 'transform 0.3s',
    },
    iconHover: {
        transform: 'scale(1.2)',
    },
};

export default SocialMediaButtons;