export const type = 'findCurrrentItems'

const findCurrentItems = id => {
	return{
		type,
		payload: id,
	}
}

export default findCurrentItems
