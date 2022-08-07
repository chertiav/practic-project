import React from 'react';
import Grid from '@mui/material/Grid';

function MyComponent() {
	return (
		<Grid container minHeight={'200px'} flexDirection={'column'} backgroundColor={'#28D2D0'} alignContent={'center'} color={'white'}>
			<h2>My component</h2>
			<Grid container	spacing={1} flex={'1 1 auto'} padding={1} lineHeight={'20px'} marginLeft={0} maxWidth={'1140px'}>
				<Grid item lg={6} md={6} xl={6} sm={6} xs={12} padding={0.5}>
					Our unique approach allows you to receive an unmatched breadth of business name ideas from world's largest community of naming experts. Our unique approach allows you to receive an unmatched breadth of business name ideas from world's largest community of naming experts
				</Grid>
				<Grid item lg={6} md={6} xl={6} sm={6} xs={12} padding={0.5}>
					Tour unique approach allows you to receive an unmatched breadth of business name ideas from world's largest community of naming experts. Tour unique approach allows you to receive an unmatched breadth of business name ideas from world's largest community of naming experts.
				</Grid>
			</Grid>
		</Grid>
	)
}
export default MyComponent;