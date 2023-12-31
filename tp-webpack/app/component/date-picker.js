import React from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'

class DatePicker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			focusedInput: null,
			startDate: moment(),
			endDate: moment().add(7, 'days'),
		}
	}
	render() {
		return (
			<DateRangePicker
				startDate={this.state.startDate} // momentPropTypes.momentObj or null,
				startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
				endDate={this.state.endDate} // momentPropTypes.momentObj or null,
				endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
				onDatesChange={({ startDate, endDate }) =>
					this.setState({ startDate, endDate })
				} // PropTypes.func.isRequired,
				focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
			/>
		)
	}
}

export default DatePicker
