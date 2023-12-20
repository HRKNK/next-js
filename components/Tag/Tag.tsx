import classNames from 'classnames';
import { ITag } from './Tag.types';

const Tag = ({children, filling}: ITag): JSX.Element => {
    return (
        <div className={classNames()}>
            {children}
        </div>
    );
};

export default Tag;