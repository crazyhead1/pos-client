import LoadingSpinner from '../loading-spinner';
import React, {FC, ReactElement} from 'react';
import {ThemeInterface} from '../../../../interfaces/theme';
import {createUseStyles} from 'react-jss';

const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    klaimTable: {
      borderCollapse: 'collapse',
      position: 'relative',
      width: '100%',
    },
    klaimTableLoader: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      left: '0',
      paddingTop: 40,
      position: 'absolute',
      right: '0',
    },
    klaimTbody: {
      '& td': {
        '&:first-child': {
          paddingLeft: 22,
        },
        height: 52,
        padding: '0',
      },
      '& tr': {
        boxShadow: '0px -1px 0px #e8e9f2 inset',
        height: 52,
        MozBoxShadow: '0px -1px 0px #e8e9f2 inset',
        WebkitBoxShadow: '0px -1px 0px #e8e9f2 inset',
      },
    },
    klaimTd: {
      height: 52,
      padding: 0,
    },
    klaimTh: {
      '&:first-child': {
        paddingLeft: 22,
      },
      fontSize: 14,
      fontWeight: 700,
      paddingBottom: 19,
      paddingTop: 19,
      textAlign: 'left',
    },
    klaimThead: {
      borderBottom: '1px solid #e8e9f2',
    },
  };
});

interface ComponentProps {
  tableHeadings: String[];
  renderBody: any;
  loading?: boolean;
}

const Table: FC<ComponentProps> = ({tableHeadings, renderBody, loading}) => {
  const classes = useStylesFromThemeFunction();
  return (
    <table className={classes.klaimTable}>
      <thead className={classes.klaimThead}>
        <tr>
          {tableHeadings.map((title, index) => (
            <th key={index} className={classes.klaimTh}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      {loading && (
        <div className={classes.klaimTableLoader}>
          <LoadingSpinner />
        </div>
      )}
      {!loading && <tbody className={classes.klaimTbody}>{renderBody()}</tbody>}
    </table>
  );
};

export default Table;
