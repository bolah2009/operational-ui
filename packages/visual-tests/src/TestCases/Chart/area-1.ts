import { Chart } from "@operational/visualizations"
import { MarathonEnvironment } from "../../Marathon"

const AreaRenderer = {
  type: "area",
}

const LineRenderer = {
  type: "line",
}

const AreaRendererWithColor = {
  type: "area",
  accessors: {
    color: () => "#ccc",
  },
}

const AreaRendererWithInterpolation = {
  type: "area",
  accessors: {
    color: () => "#ccc",
    interpolate: () => "monotoneX",
  },
}

const LineRendererWithInterpolation = {
  type: "line",
  accessors: {
    interpolate: () => "monotoneX",
  },
}

const AreaRendererWithGaps = {
  type: "area",
  accessors: {
    color: () => "#ccc",
    interpolate: () => "monotoneX",
    closeGaps: () => false,
  },
}

const LineRendererWithGaps = {
  type: "line",
  accessors: {
    interpolate: () => "monotoneX",
    closeGaps: () => false,
  },
}

const LineRendererDashed = {
  type: "line",
  accessors: {
    interpolate: () => "monotoneX",
    closeGaps: () => false,
    dashed: () => true,
  },
}

const createData = (renderers: any[]) => {
  return {
    series: [
      {
        data: [
          { x: new Date(2018, 2, 11), y: Math.floor(Math.random() * 500) - 250 },
          { x: new Date(2018, 2, 12), y: Math.floor(Math.random() * 500) - 250 },
          { x: new Date(2018, 2, 13), y: Math.floor(Math.random() * 500) - 250 },
          { x: new Date(2018, 2, 15), y: Math.floor(Math.random() * 500) - 250 },
          { x: new Date(2018, 2, 16), y: Math.floor(Math.random() * 500) - 250 },
          { x: new Date(2018, 2, 17), y: Math.floor(Math.random() * 500) - 250 },
          { x: new Date(2018, 2, 18), y: Math.floor(Math.random() * 500) - 250 },
          { x: new Date(2018, 2, 19), y: Math.floor(Math.random() * 500) - 250 },
        ],
        name: "Pageviews 2018",
        key: "series1",
        interpolate: "step",
        renderAs: renderers,
      },
    ],
    axes: {
      x1: {
        type: "time",
        start: new Date(2018, 2, 10),
        end: new Date(2018, 2, 19),
        interval: "day",
      },
      y1: {
        type: "quant",
      },
    },
  }
}

export const marathon = ({ test, afterAll, container }: MarathonEnvironment): void => {
  const viz = new Chart(container)

  test("Render", () => {
    viz.data(createData([AreaRenderer, LineRenderer]))
    viz.draw()
  })

  test("Update colors", () => {
    viz.data(createData([AreaRendererWithColor, LineRenderer]))
    viz.draw()
  })

  test("Change interpolation", () => {
    viz.data(createData([AreaRendererWithInterpolation, LineRendererWithInterpolation]))
    viz.draw()
  })

  test("Turn off `closeGaps`", () => {
    viz.data(createData([AreaRendererWithGaps, LineRendererWithGaps]))
    viz.draw()
  })

  test("Dashed lines", () => {
    viz.data(createData([AreaRendererWithGaps, LineRendererDashed]))
    viz.draw()
  })

  test("Resize", () => {
    viz.config({
      width: 600,
      height: 300,
    })
    viz.draw()
  })

  afterAll(() => {
    viz.close()
  })
}

export const title: string = "Area/line"

// Must match the file name so we can link to the code on GitHub
export const slug = "area-1"