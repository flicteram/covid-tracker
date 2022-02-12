import React,{useMemo} from "react";
import { useTable,usePagination,useGlobalFilter} from 'react-table'
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import './Table.css'

function Table({mostAffected,title}){


    const data = useMemo(()=> mostAffected.map(item=>{
        return {'col1':[item.country,item.countryInfo.flag],
                'col2':item.cases.toLocaleString(),
                'col3':item.casesPerOneMillion.toLocaleString(),
                'col4':item.critical.toLocaleString(),
                'col5':item.recovered.toLocaleString(),
                'col6':item.deaths.toLocaleString(),
                'col7':item.deathsPerOneMillion.toLocaleString(),
                'col8':item.tests.toLocaleString(),
                'col9':item.testsPerOneMillion.toLocaleString()}
     }),[mostAffected])
     
    const columns = useMemo(
        () => [
          {
            Header: 'Country',
            accessor:'col1',
            Cell:({cell:{value}})=>(
              <Link to={`/country/${value[0]}`} className='tableWithFlag'>
                <img className='tableFlag' src={value[1]} alt={`${value[1]}flag`}/>
                <p>{value[0]}</p>
              </Link>)
          },
          {
            Header: 'Cases',
            accessor: 'col2',
          },
          {
              Header:'Cases per million',
              accessor:'col3'
          },
          {
              Header:'Critical',
              accessor:'col4'
          },
          {
              Header:'Recovered',
              accessor:'col5'
          },
          {
            Header:'Deaths',
            accessor:'col6'
        },
        {
            Header:'Deaths per million',
            accessor:'col7'
        },
        {
            Header:'Tests',
            accessor:'col8'
        },
        {
            Header:'Tests per million',
            accessor:'col9'
        }
        ],[])
        const All = data.length
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            prepareRow,
            page, 
            canPreviousPage,
            canNextPage,
            pageOptions,
            nextPage,
            previousPage,
            setPageSize,
            state: { pageIndex, pageSize, globalFliter },
            setGlobalFilter
          } = useTable(
            {
              columns,
              data,
              initialState: { pageIndex: 0 },
            },
            useGlobalFilter,usePagination
          )
        
    
      return (
        <div className='tableAllContainer'>
          <div className='searchTableContainer'>
          <h2 className='tableAllCountries'>{title}</h2>
          <Filter filter={globalFliter} setFilter={setGlobalFilter}/>
          </div>

        
          <div className='tableContainer'>
            
        <div className='tableWrap'>
          
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>
                        {
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        <div className='paginition'>

        <div className='buttonsContainer'>   
        <button className='buttonPrev' onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button className='buttonNext' onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>

        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 15, All ].map((pageSize,index) => (
            <option key={index} value={pageSize}>
              Show {pageSize===All?'All':pageSize}
            </option>
          ))}
        </select>
        </div>

        <span className='page'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        
        </div>
        </div>
        </div>
      )
}

export default Table