import Image from 'next/future/image';

const logoStyle = { width: '80px', height: '100%', margin: '10px' };

export const EnergySavvyLogo = () => <Image alt='EnergySavvy Logo' src='/EnergySavvyLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const OsmoLogo = () => <Image alt='Osmo Logo' src='/OsmoLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const OlinLogo = () => <Image alt='Olin College of Engineering Logo' src='/OlinLogo.jpeg' width="0" height="0" sizes="100vw" style={logoStyle} />
export const MetaLogo = () => <Image alt='Meta Logo' src='/MetaLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />

export const USGBCLogo = () => <Image alt='US Green Building Council (USGBC) Logo' src='/USGBCLogo.png' width="0" height="0" sizes="100vw" style={{ ...logoStyle, width: '50px' }} />

export const MicrosoftLogo = () => <Image alt='Microsoft Logo' src='/MicrosoftLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const ConvoyLogo = () => <Image alt='Convoy Logo' src='/ConvoyLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const SynapseLogo = () => <Image alt='Synapse Logo' src='/SynapseLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
