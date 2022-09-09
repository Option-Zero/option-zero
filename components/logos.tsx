import Image from 'next/future/image';

const logoStyle = { width: '100px', height: '100%', margin: '10px' };

export const EnergySavvyLogo = () => <Image src='/EnergySavvyLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const OsmoLogo = () => <Image src='/OsmoLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const OlinLogo = () => <Image src='/OlinLogo.jpeg' width="0" height="0" sizes="100vw" style={logoStyle} />
export const MetaLogo = () => <Image src='/MetaLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />

export const USGBCLogo = () => <Image src='/USGBCLogo.png' width="0" height="0" sizes="100vw" style={{ ...logoStyle, width: '50px' }} />

export const MicrosoftLogo = () => <Image src='/MicrosoftLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const ConvoyLogo = () => <Image src='/ConvoyLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
export const SynapseLogo = () => <Image src='/SynapseLogo.png' width="0" height="0" sizes="100vw" style={logoStyle} />
