import { BoxScene } from "./box";

type TMainProps = {};

const Lorem = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta, mauris
    sed finibus varius, velit odio faucibus ipsum, sed hendrerit ligula ipsum at
    magna. Donec porta condimentum ex. Nulla tincidunt diam a elit ornare, sed
    vestibulum odio vestibulum. Phasellus leo lectus, rhoncus sit amet mauris
    sed, iaculis rutrum metus. Aliquam luctus aliquet magna, vitae egestas lorem
    lacinia sit amet. Nunc augue risus, interdum vitae libero ac, finibus
    iaculis sapien. Vestibulum dignissim nulla at dignissim aliquam. Praesent
    rhoncus libero libero, sit amet finibus mi iaculis in. Vivamus vitae mi nec
    magna tempor venenatis vitae ut risus. Nullam urna libero, accumsan sodales
    ex non, consequat bibendum diam. Aenean luctus tincidunt nunc, ac
    sollicitudin magna dignissim in. Duis maximus tellus eget nisl consectetur,
    nec blandit elit iaculis. In hac habitasse platea dictumst. Sed a orci non
    lacus congue eleifend non non justo. Integer sit amet tincidunt elit, sed
    suscipit erat. Maecenas erat nisl, fringilla sed orci vitae, sodales rhoncus
    nunc. Suspendisse potenti. Vestibulum sem nibh, consequat sit amet diam
    quis, ullamcorper efficitur sem. Mauris laoreet aliquet varius. Praesent
    faucibus sodales felis sed efficitur. Vestibulum aliquet augue vitae ex
    scelerisque, in fringilla sapien cursus. Proin rhoncus in elit at fermentum.
    Ut non eros dolor. Mauris at velit in urna maximus eleifend ut eu diam.
    Mauris sollicitudin sed nisl sit amet consequat. Etiam in sollicitudin odio,
    id faucibus ante. Aenean congue, augue nec porta iaculis, metus turpis
    mattis erat, vel ultricies nulla nisi ac ante. Nulla at ullamcorper quam, et
    tempus orci. In hac habitasse platea dictumst. Nam non nibh ornare,
    condimentum nisi ut, vulputate ex. Donec vel mauris vitae libero dictum
    aliquet in sed enim. Aliquam fermentum nulla semper augue aliquet aliquet.
    Fusce molestie facilisis malesuada. Nam tempus purus felis, laoreet
    porttitor purus consequat sit amet. Etiam ullamcorper in nunc sit amet
    porttitor. Pellentesque efficitur orci lorem, in vulputate massa euismod
    nec. Curabitur nec aliquam sapien, eu dignissim sem. Donec nec pulvinar
    risus. Sed placerat, lectus vel pretium condimentum, diam risus iaculis
    risus, vel feugiat augue dolor vel leo. Nulla in est sem. Praesent
    tristique, magna vel vestibulum scelerisque, ligula tellus molestie leo, vel
    faucibus lorem metus sit amet massa. Aliquam metus magna, tincidunt nec
    justo sit amet, placerat condimentum massa. Nam ut faucibus felis. Nullam
    volutpat pharetra lectus quis dapibus. Phasellus rutrum pharetra metus in
    rutrum. Maecenas consequat ante vitae rhoncus maximus. Quisque pharetra
    dictum nunc non porttitor. Donec eget risus pellentesque quam iaculis
    pulvinar ut ut augue. Curabitur vitae nunc ut velit viverra hendrerit eget
    et velit. Nunc lorem tortor, congue eget lorem tempor, ultricies ultricies
    quam. Donec sit amet leo at odio laoreet tincidunt. Suspendisse et diam
    gravida, placerat odio eu, viverra nunc. Suspendisse id porttitor odio,
    malesuada vestibulum ipsum. Vestibulum ante ipsum primis in faucibus orci
    luctus et ultrices posuere cubilia curae; Cras eu mattis eros, in volutpat
    ante. Sed iaculis pellentesque urna in bibendum. Donec interdum tortor sit
    amet ipsum euismod laoreet. Aliquam tempor rutrum ligula, sed commodo nulla.
    Aenean quis elit nulla. Sed non lacus turpis. Nullam sit amet faucibus
    neque. Maecenas viverra risus erat, ac eleifend ligula dapibus id. Nam
    feugiat pretium mi vitae interdum. Nullam arcu sapien, tristique sed neque
    at, cursus semper est.
  </p>
);

export const Main = ({}: TMainProps): JSX.Element => {
  return (
    <div>
      <BoxScene />
      <h1>Title</h1>
      <Lorem />
      <h1>Title 2</h1>
      <h2>Title 3</h2>
      <Lorem />
      <h1>Title 4</h1>
      <h2>Title 5</h2>
      <Lorem />
    </div>
  );
};
