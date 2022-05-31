function Grid(props) {
    const style = {
        columnGap: props.xlcol ? props.colgap : '',
        rowGap: props.xlcol ? props.rowgap : ' '
    }
    const Col = props.col ? `grid-col-${props.col}` : ""
    const mdCol = props.mdcol ? `grid-md-col-${props.mdcol}` : ""
    const smCol = props.smcol ? `grid-sm-col-${props.smcol}` : ""
    const lgCol = props.lgcol ? `grid-lg-col-${props.lgcol}` : ""
    const xlCol = props.xlcol ? `grid-xl-col-${props.xlcol}` : ""
    return (
        <div className={`grid ${Col}  ${smCol} ${mdCol} ${lgCol} ${xlCol}`} style={style}>
            {props.children}
        </div>
    );
}

export default Grid;