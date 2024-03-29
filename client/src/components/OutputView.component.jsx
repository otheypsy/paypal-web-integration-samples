import OutputJson from '../lib/components/form/OutputJson/OutputJson.component.jsx'
import TabSet from '../lib/components/other/TabSet/TabSet.component.jsx'
import Tab from '../lib/components/other/TabSet/Tab.component.jsx'
import { useOutput, useRemoveOutput, useClearOutput } from '../states/Output/output.hooks.jsx'

const OutputView = () => {
    const output = useOutput()
    const removeOutput = useRemoveOutput()
    const clearOutput = useClearOutput()

    return (
        <>
            <h3>Output</h3>
            <hr />
            <TabSet>
                {output.map((item) => {
                    return (
                        <Tab key={item.outputId} label={item.label}>
                            <br />
                            <div className="btn-group" role="group">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeOutput(item.outputId)}
                                >
                                    Clear
                                </button>
                                <button type="button" className="btn btn-outline-danger" onClick={clearOutput}>
                                    Clear All
                                </button>
                            </div>
                            <br />
                            <br />
                            <OutputJson theme="rjv-default" src={item.data} />
                        </Tab>
                    )
                })}
            </TabSet>
        </>
    )
}

export default OutputView
