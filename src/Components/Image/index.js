import { forwardRef, useState } from "react";
import images from "../../assets/Image";
function Image({ className, src, alt, fallback: customFallback = images.NoImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const hanldError = () => {
        setFallback(customFallback)
    }
    return <img className={className} src={fallback || src} alt={alt} ref={ref} {...props} onError={hanldError} />
}
export default forwardRef(Image);