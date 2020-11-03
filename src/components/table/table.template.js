const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `    
    <div class="cell" contenteditable></div>   
  `;
}

function createCol() {
  return `    
    <div class="column">
      A
    </div>     
  `;
}

function createRow() {
  return `
    <div class="row">
      <div class="row-info"></div>

      <div class="row-data">
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
      </div>
    </div>

    <div class="row">
      <div class="row-info">
        1
      </div>

      <div class="row-data">
        <div class="cell selected" contenteditable>1</div>
        <div class="cell" contenteditable>2</div>
        <div class="cell" contenteditable>3</div>
      </div>
    </div>
  `;
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A;

  return
}