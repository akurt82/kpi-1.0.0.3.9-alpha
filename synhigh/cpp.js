const synhigh_cpp =
{
    element : 'cpp',
    strings : [
        {
        enter : '"',
        leave : '"',
        charcolor : 'green'
        },
        {
            enter : '\'',
            leave : '\'',
            charcolor : 'green'
        }    
       ],
    comments : [
        {
            enter : '/*',
            leave : '*/',
            charcolor : 'gray',
            font :
                {
                    italic : true
                }
        },
        {
            enter : '//',
            charcolor : 'gray',
            font :
                {
                    italic : true
                }
        }
    ],
    numerics : [
        {
            charset : '0123456789',
            charcolor : 'magenta'
        },
        {
            charset : '0123456789aAbBcCdDeEfF',
            charcolor : 'magenta'
        }
    ],
    spchars : [
        {
            charset : '{}[]()<>=+-*/;,.!%&~#?',
            charcolor : 'rgb( 40, 70, 110 )'
        }
    ],
    keys : [
        {
        keywords : [
            'void', 'char', 'short', 'int', 'long', 'float', 'double', 'signed', 'unsigned', 'volatile',
            'main', 'if', 'else', 'for', 'do', 'while', 'break', 'continue', 'enum', 'return', 'sizeof',
            'asm', 'auto', 'extern', 'export', 'bool', 'false', 'true', 'switch', 'case', 'default',
            'try', 'catch', 'goto', 'throw', 'this', 'class', 'struct', 'typedef', 'union', 'virtual',
            'wchar_t', 'mutable', 'namespace', 'inline', 'char8_t', 'char16_t', 'char32_t',
            'dynamic_cast', 'decltype', 'stawtic', 'static_assert', 'static_cast', 'template',
            'new', 'delete', 'private', 'protected', 'public'
        ],
        casesens : false,
        charcolor : 'rgb( 30, 45, 119 )',
        font : 
            {
             bold : true
            }
        },
        {
            keywords : [
                'define', 'const', 'ifdef', 'ifndef', 'endif', 'else'
            ],
            casesens : false,
            beginchar : '#',
            charcolor : 'rgb( 120, 135, 80 )'
        }   
    ],
    indents : []
}
;