import * as React from 'react';
import {Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function Content(props) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%',marginTop:'40px' }}>
      <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Pagination
          page={page}
          count={props.itemsCount}
          spacing={2}
          onChange={props.handlePageChange}
          variant="outlined" 
          color="secondary" 
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={props.itemsName+`${item.page === 1 ? '?act=show-all' : `?act=show-all&page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
}

export default function PaginationLinks(props) {
  
  return (
    <MemoryRouter style={{ position: 'fixed', bottom: 0, width: '100%' }} initialEntries={['/jobs']} initialIndex={0}>
      <Routes>
        <Route path="*" element={<Content {...props}/>} />
      </Routes>
    </MemoryRouter>
  );
}