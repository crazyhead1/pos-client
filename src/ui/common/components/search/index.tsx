import React from 'react';
import searchIcon from '../../../../assets/search_icon.svg';
import {useStylesFromThemeFunction, ComponentProps} from './SearchComponent';
import {get as getStorage, set as setStorage} from 'local-storage';

const SearchComonent: React.FC<ComponentProps> = ({placeholder, setSearch}) => {
  const classes = useStylesFromThemeFunction();
  const search = getStorage('search') as string;
  const [searchTyping, setSearchTyping] = React.useState<string>(search || '');

  React.useEffect(() => {
    const delayFn = setTimeout(() => {  
      setStorage('search', searchTyping);
    }, 500);
    return () => clearTimeout(delayFn);
  }, [searchTyping]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTyping(e.currentTarget.value);
  };
  return (
    <div className={classes.container}>
      <img className={classes.imageIcon} src={searchIcon} alt="search" />
      <input value={searchTyping} placeholder={placeholder} className={classes.input} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default SearchComonent;
