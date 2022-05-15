import React from "react"
import Heatmap from "react-calendar-heatmap"
import { subYears, isBefore, isSameDay, addDays } from "date-fns"

import { Container } from "./styles"

type HeatmapValue = {
  date: Date
  count: number
}

const RandomCalendar: React.FC = () => {
  const endDate = new Date()
  const startDate = subYears(endDate, 1)

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0
            if (item !== null) {
              clampedCount = Math.max(0, Math.min(4, item.count))
            }
            return `scale-${clampedCount}`
          }}
          showWeekdayLabels
        />
      </div>
      <span>Random calendar(do not represent actual data)</span>
    </Container>
  )
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = []

  let currentDate = startDate
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    let date = currentDate
    let count = Math.round(Math.random() * 4)

    values.push({ date, count })
    currentDate = addDays(currentDate, 1)
  }
  return values
}

export default RandomCalendar
