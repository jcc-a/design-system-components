/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * table function
 *
 * Table includes styling for arranging data in rows and columns
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * The table component
 * 
 * @param {string} caption 
 * @param {object[]} headers 
 * @param {object[]} rows 	
 */
const AUTable = ( { caption, headers, rows, dark, alt, stripped, attributeOptions } ) => {
	return <table className={`au-table ${ dark ? 'au-table--dark' : ""}${ alt ? 'au-table--alt' : ''}${ stripped ? 'au-table--stripped' : ''}`} {...attributeOptions }>
		<caption>{caption}</caption>
		<thead>
			<tr>
				{
					headers.map( (item, index) => <th key={index} scope="col">{item.text}</th>)
				}
			</tr>
		</thead>
		<tbody>
			{
				rows.map( ( item, index ) => {
					let result = [];

					item.forEach( ( item, index ) => {
						result.push( <td 
							data-label={ headers[ index ].text } 
							key={ index }>{ item.text }
						</td> ); 
					});

					return <tr key={index}>{result}</tr>;
				})
			}
		</tbody>
	</table>;
};


AUTable.propTypes = {
	caption: PropTypes.string.isRequired,
	headers: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	rows: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
			})
		)
	).isRequired,
	alt: PropTypes.bool,
	stripped: PropTypes.bool,
	dark: PropTypes.bool
};

AUTable.defaultProps = {
	caption: "Title of the table",
	headers: [
		{
			text: "Row 1, heading 1"
		},
		{
			text: "Row 1, heading 2"
		}
	],
	rows: [
		[
			{
				text: "Row 2, heading 1, cell 1"
			},
			{
				text: "Row 2, heading 2, cell 2"
			}
		],
		[
			{
				text: "Row 3, heading 1, cell 3"
			},
			{
				text: "Row 3, heading 2, cell 4"
			}
		]
	]
};

export default AUTable;