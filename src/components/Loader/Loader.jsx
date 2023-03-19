import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div style={{
              marginLeft: 'auto',
              marginRight: 'auto'}}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
};